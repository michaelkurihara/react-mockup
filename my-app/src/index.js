import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Header, Image, List, Menu } from 'semantic-ui-react';

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
              <Grid.Column className="right-column" width={7}>
                <Grid rows={2}>
                  <Grid.Row verticalAlign="middle">
                    <List horizontal>
                      <List.Item>
                        <Image src="https://xkcd.com/s/0b7742.png" />
                        <List.Content verticalAlign="Middle">
                          A webcomic of romance,<br/>sarcasm, math, and language.
                        </List.Content>
                      </List.Item>
                    </List>
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
        <div className="my-middle-section">
          <Grid columns={1} textAlign="center">
            <Grid.Row>
              <Grid.Column className="middle-column" textAligned="center" width={10}>
                <List textAligned="center">
                  <List.Item><List.Content>Interaction</List.Content></List.Item>
                  <List.Item>
                    <div class="centered buttonmenu buttons">
                      <button class="ui mybutton compact mini button">|<i class="chevron left icon"></i></button>
                      <button class="ui mybutton compact mini button"><i class="chevron left icon"></i>Prev</button>
                      <button class="ui mybutton compact mini button">Random</button>
                      <button class="ui mybutton compact mini button">Next<i class="chevron right icon"></i></button>
                      <button class="ui mybutton compact mini button"><i class="chevron right icon"></i>|</button>
                    </div>
                  </List.Item>
                  <Image src="https://imgs.xkcd.com/comics/interaction.png" centered />
                  <List.Item>
                    <div class="centered buttonmenu buttons">
                      <button class="ui mybutton compact mini button">|<i class="chevron left icon"></i></button>
                      <button class="ui mybutton compact mini button"><i class="chevron left icon"></i>Prev</button>
                      <button class="ui mybutton compact mini button">Random</button>
                      <button class="ui mybutton compact mini button">Next<i class="chevron right icon"></i></button>
                      <button class="ui mybutton compact mini button"><i class="chevron right icon"></i>|</button>
                    </div>
                  </List.Item>
                </List>
                <div class="smallcaptext">Permanent link to this comic: https://xkcd.com/1958/</div>
                <div class="smallcaptext">
                  Image URL (for hotlinking/embedding): https://imgs.xkcd.com/comics/self_driving_issues.png
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
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
          <MiddleSection/>
        </div>
    );
  }
}

ReactDOM.render(<Xkcd/>, document.getElementById('root'));
