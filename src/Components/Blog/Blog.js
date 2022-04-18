import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div style={{minHeight:"100vh"}}>
            <div className="div w-50 mx-auto mt-5">
            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Difference between authorization and authentication</Accordion.Header>
    <Accordion.Body>
                            <p>AuthenTication:The process of determining whether an act of someone (which is supposed to be correct) is true.Authentication verifies who the user is.Authentication is the first step of a good identity and access management process.</p>
                            <p>Authorization:The process of determining using some process and want to permission the author.Authorization determines what resources a user can access.</p>
                            
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header> Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
    <Accordion.Body>
    For most developers, building an authentication system for your app can feel a lot like paying taxes. They are both relatively hard to understand tasks that you have no choice but doing, and could have big consequences if you get them wrong. No one ever started a company to pay taxes and no one ever built an app just so they could create a great login system. They just seem to be inescapable costs.
                            But now, you can at least free yourself from the auth tax. With Firebase Authentication, you can outsource your entire authentication system to Firebase so that you can concentrate on building great features for your app. Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system
                            there have some more authentication system like custom email address verification passwordreset option email address changes
    </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
    <Accordion.Header> What other services does firebase provide other than authentication?</Accordion.Header>
    <Accordion.Body>
    There have lot of feture to add a morder project if you want to store your website then use hosting. if you want to lerning about machine learning then you have to done ot with out any cost 
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
           </div>
        </div>
    );
};

export default Blog;