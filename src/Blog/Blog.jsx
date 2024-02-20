import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-section'>
       
            <div className='blog-text'>
                <h1 className='heading'>Blog</h1>
                <div className='block_doodles'>
                    <img src="front_right.png" data-aos='fade-left' alt="" />
                    <img src="front_left.png" data-aos='fade-right' alt="" />
                </div>
                <div className="question lg:mx-20 mx-5" data-aos="fade-right">
                    <h3 className='text-lg font-medium secondary-text'>
                        1. Tell us the differences between uncontrolled and controlled components?
                    </h3>
                    <p>
                    In React, Controlled components refer to the components where the state and behaviors are controlled by Parent components while Uncontrolled components are the ones having control of their own state and manage the behaviors on themselves. 
                    </p>
                    <h3 className='text-lg font-medium secondary-text'>
                        2. How to validate React props using PropTypes?
                    </h3>
                    <p>
                    We can validate props that can be one of multiple types. To do this, we call oneOfType with an array of types. The optionalUnion prop can be one of string, number or a Person class or constructor instance as specified by the content of the array we call oneOfType with.s
                    </p>
                    <h3 className='text-lg font-medium secondary-text'>
                        3. Tell us the difference between nodejs and express js?
                    </h3>
                    <p>
                    Node JS is a platform for building i/o applications that are server-side event-driven and made using JavaScript. Express JS is a framework based on Node JS which is used for building web applications using approaches and principles of Node JS event-driven architecture.
                    </p>
                    <h3 className='text-lg font-medium secondary-text'>
                        4. What is a custom hook, and why will you create a custom hook?
                    </h3>
                    <p>
                    Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which ensures clean code and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
                    </p>
                    


                </div>
            </div>

      
        </div>
    );
};

export default Blog;