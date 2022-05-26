import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <h2 className='text-4xl font-bold mt-12'>Five answers of 5 questions</h2>
            <div className='blog-items my-5 bg-success  text-white py-5 px-5'>
                <h3 className='text-2xl font-w mb-2'>How will you improve the performance of a React Application? </h3>
                <p>
                    Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.

                    According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.

                    In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.

                    In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:
                </p>
            </div>
            <div className='blog-items my-5 bg-success  text-white py-5 px-5'>
                <h3 className='text-2xl font-w mb-2'>How will you improve the performance of a React Application? </h3>
                <p>
                    Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.

                    According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.

                    In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.

                    In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:
                </p>
            </div>
            <div className='blog-items my-5 bg-success  text-white py-5 px-5'>
                <h3 className='text-2xl font-w mb-2'>How does prototypical inheritance work?</h3>
                <p>
                    JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.

                    Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).

                    JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.

                    Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.
                </p>
            </div>
            <div className='blog-items my-5 bg-success  text-white py-5 px-5'>
                <h3 className='text-2xl font-w mb-2'>How will you implement a search to find products by name?</h3>
                <p>
                    In JavaScript, you will often be working with data that is stored in Arrays. A common task will be searching the array to find if it contains a value (or values) that satisfies certain search criteria. Depending on the task at hand, you may be interested in a boolean value for confirmation, an index for the position of the value in the array, or a separate array containing all the search results.

                    Prior to ECMAScript 6, you probably would have used a for loop to iterate through all the items in the array and perform operations on each item. Now there are several built-in utility methods that solve some of the common tasks for searching for values in an array.
                </p>
            </div>
            <div className='blog-items my-5 bg-success  text-white py-5 px-5'>
                <h3 className='text-2xl font-w mb-2'>What is a unit test? Why should write unit tests?</h3>
                <p>
                    UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.

                    In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.
                </p>
            </div>
        </div>
    );
};

export default Blogs;