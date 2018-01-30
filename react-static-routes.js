
    import React, { Component } from 'react'
    import { Route } from 'react-router-dom'

    // Template Imports
    import src_pages_modules_module_module from '../src/pages/modules/module/module'
import src_pages_modules_modules from '../src/pages/modules/modules'
import src_pages_about_about from '../src/pages/about/about'
import src_pages_404_404 from '../src/pages/404/404'

    // Template Map
    const templateMap = {
      t_0: src_pages_modules_module_module,
t_1: src_pages_modules_modules,
t_2: src_pages_about_about,
t_3: src_pages_404_404
    }

    // Template Tree
    const templateTree = {c:{"404":{t:"t_3"},"modules":{c:{"1-Javascript-General-Topics":{c:{"functions":{t:"t_0"},"immutability":{t:"t_0"},"javascript-interpreter":{t:"t_0"},"js-eventloop":{t:"t_0"},"promises":{t:"t_0"}}},"2-Working-With-Arrays":{c:{"array-filter":{t:"t_0"},"array-map":{t:"t_0"},"array-reduce":{t:"t_0"}}},"3-Functional-Programming":{c:{"functional-programming":{t:"t_0"}}},"4-Observables":{c:{"observable-switchmap-vs-mergemap":{t:"t_0"},"observables-create":{t:"t_0"},"observables-intro":{t:"t_0"}}},"5-React":{c:{"react-component":{t:"t_0"},"react-container":{t:"t_0"},"react-intro":{t:"t_0"},"react-lifecycles":{t:"t_0"},"react-outline":{t:"t_0"},"react-summary":{t:"t_0"}}},"6-Redux":{c:{"redux-action-reducer":{t:"t_0"},"redux-connect":{t:"t_0"},"redux-hello":{t:"t_0"},"redux-intro":{t:"t_0"},"redux-logging":{t:"t_0"},"redux-merge":{t:"t_0"},"redux-store":{t:"t_0"},"redux-thunk":{t:"t_0"}}},"7-Git":{c:{"git-branch-stage-commit":{t:"t_0"},"git-cheatsheet":{t:"t_0"},"git-fork":{t:"t_0"},"git-intro":{t:"t_0"},"git-rebase":{t:"t_0"}}},"8-Other":{c:{"resources":{t:"t_0"},"set-up-node":{t:"t_0"},"tips-and-tricks":{t:"t_0"}}}}},"/":{t:"t_1"},"about":{t:"t_2"}}}

    // Get template for given path
    const getComponentForPath = path => {
      const parts = path === '/' ? ['/'] : path.split('/').filter(d => d)
      let cursor = templateTree
      try {
        parts.forEach(part => {
          cursor = cursor.c[part]
        })
        return templateMap[cursor.t]
      } catch (e) {
        return false
      }
    }

    export default class Routes extends Component {
      render () {
        const { component: Comp, render, children } = this.props
        const renderProps = {
          templateMap,
          templateTree,
          getComponentForPath
        }
        if (Comp) {
          return (
            <Comp
              {...renderProps}
            />
          )
        }
        if (render || children) {
          return (render || children)(renderProps)
        }

        // This is the default auto-routing renderer
        return (
          <Route path='*' render={props => {
            let Comp = getComponentForPath(props.location.pathname)
            if (!Comp) {
              Comp = getComponentForPath('404')
            }
            return Comp && <Comp {...props} />
          }} />
        )
      }
    }
  