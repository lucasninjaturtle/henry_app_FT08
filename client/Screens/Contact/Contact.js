import React, { Component } from 'react';
import { Container, Button, Header, Content, Form, Item, Input, Label, Textarea, Toast, Text } from 'native-base';


const Contact = ()=>{

    return (
        <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Subject</Label>
              <Input />
            </Item>
            
            <Textarea rowSpan={15} bordered />
            
            
          </Form>
          
          <Button
          style={{alignSelf:'center', marginTop:20}}
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
        </Content>
      </Container>
    )
}

export default Contact;


