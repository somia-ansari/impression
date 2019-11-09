import React, { Component } from 'react'

import FormPage from './FormPage.jsx'
import icon from '../icon.png'

import './Main.css';

import { Layout, Menu, Breadcrumb, Switch } from 'antd';
const { Header, Content, Footer } = Layout;



export default class Main extends Component {
  state = {
    theme: 'dark',
    current: '1',
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <div className="Main">
        <Switch
          checked={this.state.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme={this.state.theme}
              onClick={this.handleClick}
              defaultOpenKeys={['sub1']}
              selectedKeys={[this.state.current]}
              mode="horizontal"
              defaultSelectedKeys={['2']}
            >
              <Menu.Item key="0"><img src={icon} alt="icon" />Your CV is your 1st impression in career</Menu.Item>

              <Menu.Item key="1">
                <a href="https://impressions-cv.web.app/" target="_blank" rel="noopener noreferrer">Home</a>
              </Menu.Item>
              <Menu.Item key="2">
                <a href="https://github.com/somia-ansari/impression" target="_blank" rel="noopener noreferrer">Like Repo</a>

              </Menu.Item>
              <Menu.Item key="3">
                <a href="https://github.com/somia-ansari/" target="_blank" rel="noopener noreferrer">Follow me</a>

              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>CV builder</Breadcrumb.Item>
              <Breadcrumb.Item>Form</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
             
              <FormPage />

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Thank you for using this service. Like my github
          <a href="https://github.com/somia-ansari/impression" target="_blank" rel="noopener noreferrer"> repo</a>
          </Footer>
        </Layout>

      </div>

    )
  }
}

