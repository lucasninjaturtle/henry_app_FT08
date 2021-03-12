import React, { Component } from 'react';
import { Container, Button, Header, Content, Form, Item, Input, Label, Textarea, Toast, Text, Root } from 'native-base';


const Contact = ()=>{

    return (
        <Container>
        <Content>
          <Header>
            <Text style={{alignSelf:'center',fontFamily:'monospace',color:'white'}}>
              Contact Us
            </Text>
          </Header>
          <Form>
            <Item floatingLabel>
              <Label>Subject</Label>
              <Input />
            </Item>
            
            <Textarea placeholder='Response' rowSpan={10} bordered />
            
            
          </Form>
          <Root>
            <Button
            style={{alignSelf:'center', marginTop:300}}
              onPress={() =>
                Toast.show({
                  text: "Wrong password!",
                  textStyle: { color: "yellow" },
                  buttonText: "Okay"
                })
              }
            >
            <Text >Submit</Text>
          </Button>

          </Root>
        </Content>
      </Container>
    )
}

export default Contact;


