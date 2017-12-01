import Link from "gatsby-link";
import * as React from "react";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import { Segment, Icon, Container, Sidebar } from "semantic-ui-react";

import {LINK as WORKSHOP_LINK, NAME as WORKSHOP_NAME} from "../pages/workshop";
import {LINK as ABOUT_LINK, NAME as ABOUT_NAME} from "../pages/about";
import {LINK as HOME_LINK, NAME as HOME_NAME} from "../pages/about";

import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";

export const menuItems = [
  { name: HOME_NAME, path: HOME_LINK, exact: true, icon: "home", inverted: true },
  { name: ABOUT_NAME, path: ABOUT_LINK, exact: true, icon: "info circle" },
  { name: WORKSHOP_NAME, path: WORKSHOP_LINK, exact: false, icon: "newspaper" },
];

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

export default class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  render() {
    const { pathname } = this.props.location;
    const isHome = pathname === "/";

    return (
      <Sidebar.Pushable as={Segment}>
        <SidebarMenu Link={Link} pathname={pathname} items={menuItems} visible={false} />
        <Sidebar.Pusher style={{ minHeight: "100vh" }}>
          {/* Header */}
          {isHome ? null : <HeaderMenu
            Link={Link} pathname={pathname} items={menuItems}
          />}

          {/* Render children pages */}
          <div style={{ paddingBottom: 60 }}>
            {this.props.children()}
          </div>

          {/* Footer */}
          <Segment inverted vertical style={{ position: "absolute", bottom: 0, width: "100%" }}>
            <Container textAlign="center">
              <p>Powered with <Icon name="heart" /> by Gatsby 1.0</p>
            </Container>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}
