import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container>
      
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ucl.ac.uk%2Fcam%2Fbrand%2Fbrand-resources%2Fimage-library&psig=AOvVaw0K_PqrxbvCf2j1i7tuFoLd&ust=1622190684534000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiM9q-56fACFQAAAAAdAAAAABAP' }} />
              </Left>
              <Body>
                <Text>Title</Text>
                <Text note numberOfLines={2}>Its time to build a difference.Its time to build a difference.</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}