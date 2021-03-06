import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title,tabStyle } from 'native-base';

import Tab1 from './Tabs/tab1';
import Tab2 from './Tabs/tab2';
import Tab3 from './Tabs/tab3';


export default class TabScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#009387'}} hasTabs>
        <Left/>
        <Body>
          <Title style={{color: 'white'}}>News App</Title>
        </Body>
        <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor: 'white'}}>
          <Tab tabStyle={{backgroundColor: '#009387'}} activeTabStyle={{backgroundColor: '#009387'}} textStylestyle={{color: 'white'}} activeTextStyle={{color: 'white'}} heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor: '#009387'}} activeTabStyle={{backgroundColor: '#009387'}} textStylestyle={{color: 'white'}} activeTextStyle={{color: 'white'}} heading="Tab2">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor: '#009387'}} activeTabStyle={{backgroundColor: '#009387'}} textStylestyle={{color: 'white'}} activeTextStyle={{color: 'white'}} heading="Tab3">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}