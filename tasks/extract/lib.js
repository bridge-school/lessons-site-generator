'use strict';

const R = require('ramda');
const { zip } = require('lodash');
const request = require('request-promise');
const extraFs = require('fs-extra-promise');

const CONFIG = require('./config');

const zipAllAs = (lists, keys) => zip(...lists).map(R.zipObj(keys));

const getNthOccurrenceIndex = (string, subString, index) => {
  return string.split(subString, index).join(subString).length;
};

const getMatchingMarkdownBlocks = (markdownContent, START_TOKEN, END_TOKEN) => {
  let index = 0;
  const blocks = [];
  let metadata = {};

  let startIndex = markdownContent.slice(index).indexOf(START_TOKEN);

  while (index !== undefined && startIndex !== -1) {
    const fromStartToken = markdownContent.slice(index).slice(startIndex);

    const nthOccurrenceIndex = getNthOccurrenceIndex(fromStartToken, END_TOKEN, 2);
    const endIndexFromStart = nthOccurrenceIndex === -1 ?
      nthOccurrenceIndex :
      nthOccurrenceIndex + END_TOKEN.length;

    const newBlock = endIndexFromStart === -1 ?
      fromStartToken :
      fromStartToken.slice(0, endIndexFromStart);

    const truncatedNewBlock = newBlock
      .slice(START_TOKEN.length) // Start the block at the end of the START_TOKEN
      .slice(0, -END_TOKEN.length); // End the block at the start of the END_TOKEN

    if (truncatedNewBlock.trim().length > 0) {
      blocks.push(truncatedNewBlock);

      metadata = {
        ...metadata,
        locations: (metadata.locations || []).concat([index + startIndex]),
        lengths: (metadata.lengths || []).concat([
          newBlock.length - (
            START_TOKEN.length + END_TOKEN.length
          )
        ])
      };
    }

    index = index + startIndex + endIndexFromStart;
    startIndex = markdownContent.slice(index).indexOf(START_TOKEN);
  }

  const contentStartIndex = getNthOccurrenceIndex(
    markdownContent,
    CONFIG.MARKDOWN_METADATA_DELIMITER,
    2
  ) + CONFIG.MARKDOWN_METADATA_DELIMITER.length;

  return {
    ...metadata,
    locations: (metadata.locations || []).map(location => location - contentStartIndex),
    lengths: metadata.lengths || [],
    blocks
  };
};

// TODO: create REPL under certain user
const createRepl = jsReplContent => {
  if (typeof jsReplContent !== 'string' || jsReplContent.length === 0) {
    return Promise.resolve(false);
  }

  return request({
    method: 'POST',
    uri: `${CONFIG.REPL_IT_ROOT}/data/repls/new`,
    form: {
      language: 'javascript',
      editor_text: jsReplContent, // eslint-disable-line camelcase
      is_project: false // eslint-disable-line camelcase
    }, json: true
  });
};

const handleDryRunMode = (originalAbsoluteFilePath, newMarkdownFileContent, options) => {
  let nextPromise = null;
  if (options.d) {
    nextPromise = Promise.resolve(''); // Skip writing to the markdown file
  }

  nextPromise = nextPromise || (
    extraFs.truncateAsync(originalAbsoluteFilePath, 0).then(() => {
      return extraFs.writeFileAsync(originalAbsoluteFilePath, newMarkdownFileContent);
    })
  );

  return nextPromise.then(() => {
    return newMarkdownFileContent;
  }, err => {
    console.error(err);
    process.exit(-1); // eslint-disable-line unicorn/no-process-exit
  });
};

module.exports = {
  getNthOccurrenceIndex,
  zipAllAs,
  getMatchingMarkdownBlocks,
  createRepl,
  handleDryRunMode
};
