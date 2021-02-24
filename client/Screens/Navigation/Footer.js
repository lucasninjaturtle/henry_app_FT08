import React from 'react'
import {Button, Icon, Footer, FooterTab,Text } from 'native-base';

export default function Footers() {
    return (
        <Footer style={{backgroundColor:'#CEBB1B'}}>
                <FooterTab style={{backgroundColor:'#CEBB1B'}}>
                    <Button active style={{backgroundColor:'#CEBB1B'}}>
                        <Icon active name="home" />
                        <Text>Home</Text>
                    </Button>
                    <Button >
                        <Icon name="calendar" />
                        <Text>Calendar</Text>
                    </Button>
                    <Button>
                        <Icon name="stats-chart-sharp" />
                        <Text>Stats</Text>
                    </Button>
                    <Button>
                        <Icon name="hardware-chip" />
                        <Text>Challenge</Text>
                    </Button>
                    <Button>
                        <Icon name="chatbox" />
                        <Text>Chat</Text>
                    </Button>
            </FooterTab>
             </Footer>
    )
}
