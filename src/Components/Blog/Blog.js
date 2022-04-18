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
                            1. Cloud based authentication 2.Token based authentication 3.Third party access(OAuth, API-token) 4.OpenId 5.SAMl etc etc
    </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
    <Accordion.Header> What other services does firebase provide other than authentication?</Accordion.Header>
    <Accordion.Body>
    Google Firebase is a service provider that helps growing busines by providing different kinds services.It is compatible with Web, iOS, Android, and OS X clients. With Firebase, developers dont need to worry about the backend programming, Authentication, API development, database, File storage, etc. Firebase provides all the services with very efficient and fast performance.There are many services which firebase provides , Most usefull services are 1Cloud Firstore 2 Cloud Functions 3Authentications 4 Hosting 5Cloud Storage 6Google Analytics 7 Predictions 8 Cloud Messaging 9 Dynaamic Links etc etc. All these services are mostly free but if we have a large base application we have to buy some premium which is not that much costly but easy to managable.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
           </div>
        </div>
    );
};

export default Blog;