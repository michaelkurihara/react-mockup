import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Dropdown, Grid, Icon, Image, Input, List, Menu } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <div className="my-top-menu">
            <Grid columns={2} textAlign="center">
              <Grid.Row>
                <Grid.Column className="left-column" textAlign="left" width={3}>
                  <List>
                    <List.Item><List.Content>Archive</List.Content></List.Item>
                    <List.Item>What If?</List.Item>
                    <List.Item>Blag</List.Item>
                    <List.Item>Store</List.Item>
                    <List.Item>About</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column className="right-column" width={6}>
                  <Grid rows={2}>
                    <Grid.Row verticalAlign="middle">
                        <List horizontal>
                          <List.Item>
                            <Image src="https://xkcd.com/s/0b7742.png" />
                            <List.Content verticalAlign="Middle" textAlign="left">
                              A webcomic of romance,<br/>sarcasm, math, and language.
                            </List.Content>
                          </List.Item>
                        </List>
                    </Grid.Row>
                    <Grid.Row>
                      <div className="smallcaptext">xkcd updates every monday, wednesday, and friday.</div>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
            </Grid>
        </div>
    )
  }
}

class MiddleSection extends React.Component {
  render() {
    return (
        <div className="middleSection">
          <Container>
            <Grid verticalAlign="middle" columns={2} divided>
              <Grid.Column>
                <Image src="http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png" centered/>
              </Grid.Column>
              <Grid.Column>
                <div class="text">A traditional downtown saloon and eatery located in the Honolulu Financial District,just one block off the waterfront, Murphy's has been a haven for mariners, businessmen and locals since 1891.</div>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
    )
  }
}

class BottomSection extends React.Component {
  render() {
    return (
        <div className="bottomSection">
          <Container>
            <Grid columns={3} divided>
              <Grid.Column>
                <h2>Lunch</h2>
                <hr/>
                <List>
                  <List.Item>Monday-Friday: 11:00am - 2:30pm</List.Item>
                  <List.Item>Saturday-Sunday: Not open for lunch</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <h2>Bar</h2>
                <hr/>
                <List>
                  <List.Item>Monday-Friday from 11:00am</List.Item>
                  <List.Item>Saturday-Sunday from 4 pm</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <h2>Dinner</h2>
                <hr/>
                <List>
                  <List.Item>Monday-Friday: 5:30pm - 10:00pm</List.Item>
                  <List.Item>Sunday: 5:00pm - 9:00pm</List.Item>
                </List>
              </Grid.Column>
            </Grid>
          </Container>
        </div>

    )
  }
}

class Xkcd extends React.Component {
  render() {


    return (
        <div className="my-background">
          <TopMenu/>
        </div>
    );
  }
}

ReactDOM.render(<Xkcd/>, document.getElementById('root'));
