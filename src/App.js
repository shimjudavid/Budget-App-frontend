
import './App.css';
import { Container, Header, Statistic, Segment, Grid, Icon, Form, Button} from 'semantic-ui-react'

const App = () => (
<Container>
      <Header as="h1">
          Budget App
       </Header>

       <Statistic size='small'>
           <Statistic.Label>Your Balance:</Statistic.Label>
           <Statistic.Value> $2500.50</Statistic.Value>
       </Statistic>

           <Segment textAlign="center">
                <Grid columns={2} divided>
                    <Grid.Column>

                    <Statistic size='tiny' color='green'>
                        <Statistic.Label>Income</Statistic.Label>
                        <Statistic.Value> $1045.50</Statistic.Value>
                     </Statistic>

                    </Grid.Column>

                    <Grid.Column>
                    <Statistic size='tiny' color="red">
                        <Statistic.Label>Expense</Statistic.Label>
                        <Statistic.Value> $623.50</Statistic.Value>
                     </Statistic>
                    </Grid.Column>

              </Grid>

          </Segment>

          <Header as="h3">History</Header>

          <Segment textAlign="center" color="red">
          <Grid columns={3} textAlign="right">
              <Grid.Row>
                  <Grid.Column width={9} textAlign="left">
                    Something
                  </Grid.Column>

                  <Grid.Column  width={3} textAlign="right">
                      $10.00
                  </Grid.Column>

                  <Grid.Column width={4}>
                    <Icon name="edit"   />
                    &nbsp;   &nbsp;   &nbsp; &nbsp;
                    <Icon name="trash"   />
                  </Grid.Column>

              </Grid.Row>

          </Grid>
          </Segment>



          <Segment textAlign="center" color="red">
          <Grid columns={3} textAlign="right">
              <Grid.Row>
                  <Grid.Column width={9} textAlign="left">
                    Something
                  </Grid.Column>

                  <Grid.Column  width={3} textAlign="right">
                      $10.00
                  </Grid.Column>

                  <Grid.Column width={4}>
                    <Icon name="edit"   />
                    &nbsp;   &nbsp;   &nbsp; &nbsp;
                    <Icon name="trash"   />
                  </Grid.Column>

              </Grid.Row>

          </Grid>
          </Segment>



          <Segment textAlign="center" color="green">
          <Grid columns={3} textAlign="right">
              <Grid.Row>
                  <Grid.Column width={9} textAlign="left">
                    Something Income
                  </Grid.Column>

                  <Grid.Column  width={3} textAlign="right">
                      $10.00
                  </Grid.Column>

                  <Grid.Column width={4}>
                    <Icon name="edit"   />
                    &nbsp;   &nbsp;   &nbsp; &nbsp;
                    <Icon name="trash"   />
                  </Grid.Column>

              </Grid.Row>

          </Grid>
          </Segment>



          <Header as="h3">Add new transaction</Header>
          <Form unstackable>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Description' placeholder='Description' />
          <Form.Input width={4} fluid label='Value' placeholder='100' icon="dollar"
             iconPosition ="left"
          />
        </Form.Group>
        <Button.Group style={{marginTop:20}}>
            <Button>Cancel</Button>
            <Button.Or/>
            <Button primary>Ok</Button>
        </Button.Group>

      </Form>

    </Container>
)

export default App;
