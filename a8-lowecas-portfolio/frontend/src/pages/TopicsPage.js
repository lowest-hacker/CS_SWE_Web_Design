import React from 'react';


function TopicsPage() {
    return(
        <section>
            <nav class="homenav">
                <a href="#webservers">Web Servers</a>
                <a href="#frontend">Frontend Design</a>
                <a href="#images">Optimizing Images</a>
                <a href="#favicon">Favicons</a>
                <a href="#stylesheets">Cascading stylesheets</a>
                <a href="#forms">Forms</a>
                <a href="#node">Node</a>
                <a href="#javaScript">JavaScript</a>
                <a href="#DOMchanges">Changing the DOM</a>
            </nav>
            <h2>Web Dev Concepts</h2>
            <article id="webservers">
                <h3>Web Servers</h3>
                <p>
                    The term <strong>index</strong> can be related to both websites and servers in very similar fashions. 
                    Essentially in both cases, this term referenced the "homepage" of the server/website. 
                    This home page or index can be representing anything from a particular individual, a group or organization, or a company. 
                    Multiple companies use this as a default home page whenever their employees log onto their servers or VPN to their work connections. 
                </p>   
                <p>
                    After loading a website from either your local computer or from a directory, you can use the browser's Web Inspector Network tab to take a deeper dive into the elements of the webpage. 
                    This tab will show you all the files that are being loaded into the website that you are looking at.
                    Some of the information in each of these files is the loading sequence of each of the items including the item that initiates the specific sequence and the amount of time it takes to load the element. 
                    There is significantly less information that is shown when performing this exercise from a local file versus a live website. 
                    The request and response headers are significantly more detailed in looking at a website online versus a local file. 
                    For example, the response header includes a "cookie" section that is not included in the local file information. 
                </p>
                <p>
                    To properly explain the differences here we must first state what the status 200 is meant to tell you. 
                    When a file linked inside of a website gives you a status of 200 it is intended to tell you that the response received is OK. 
                    This tells you that the request was successful and has all the information needed. 
                    The files main.css and main.js do not receive a 200 <strong>status code</strong> because they were not successful in receiving the information needed to "launch" them. 
                    Since the current writing for these pages is being done in HTML versus CSS or JavaScript there is nothing in the main files to be "read" which in turn is insufficient information to do anything with the files.
                    Both files main.css and main.js receive the <strong>status code</strong> 404 which means that the resource that it is looking for was not found.  
                </p>
                <p>
                    A URL has multiple parts, but the main parts we are focusing on are the <strong>scheme</strong>, the <strong>subdomain</strong>, the <strong>host domain</strong>, and the <strong>resource</strong>. 
                    The <strong>scheme</strong>, also referred to as its <strong>protocol</strong>, is the initial part of the URL. 
                    An example of this can include HTTP or HTTPS. 
                    This <strong>scheme</strong> sets up the rules that in turn decide how files built into the website/URL are displayed, formatted, and transferred across the internet. 
                    The <strong>subdomain</strong> is the more recognizable portion of a URL for those in a technical and nontechnical field. 
                    The most common <strong>subdomain</strong> seen throughout the web is "www".
                    The <strong>subdomain</strong> helps to specify the type of resource that the browser being used will be delivering when sending the request.
                    The <strong>host domain</strong> name can be referred to as the name of the website being requested. 
                    An example of this would be, http://www.google.com/, where "google" is the <strong>host domain</strong> or the name of the website. 
                    Alternatively, the <strong>host domain</strong> can also be the IP address of the site being requested. 
                    This was a normal practice in the "early stages" of the internet before its overall purpose was changed for public consumption where now names/words are used instead.
                    <dl>
                    <dt>In the example of our website that includes our assignments, below are the parts of this URL: <strong>https://web.engr.oregonstate.edu/~lowecas/a1-lowec/ </strong></dt>
                    <dd>The <strong>scheme</strong> is https://.</dd>
                    <dd>The <strong>subdomains</strong> are web and engr.</dd>
                    <dd>The <strong>domain</strong> is oregonstate.edu.</dd>
                    <dd>The <strong>resource</strong> includes folder/file name(s).</dd>
                    </dl>
                </p>
            </article>
            <article id="frontend">
                <h3>Frontend Design</h3>
                <p>
                    Frontend design as a concept is ultimately about creating the most enjoyable and efficient experience for your users or customers. 
                    This experience for the user includes the overall design of the website including the graphical user interface or GUI.
                    This user interface should follow principles of design that include a consistent and fluid color palette, typography, and any additional graphical effects such as icons, photos, or animations. 
                </p>
                <p>Along with the frontend design concept comes the usability of the website. This usability can be described using the five "E's" of usability:
                </p>
                    <dl><dt> <strong>Effective</strong></dt>
                        <dd> The website needs to be effective in helping users meet their intended goals.
                        </dd>
                    <dt> <strong>Efficient</strong> </dt>
                        <dd> The efficiency of the website is key so visitors can perform the necessary tasks with the least amount of work or steps taken.
                        </dd>
                    <dt> <strong>Easy to Navigate</strong> </dt>
                        <dd> The website should be easy for the user to navigate. This is very important in retaining users of the site. If a user is unable to easily navigate the site, the first time they visit then they are less likely to return.
                        </dd>
                    <dt> <strong>Error-free</strong> </dt>
                        <dd> The site should be as error-free as possible. This can be done by researching what your users need/want when coming to your site. A perfect method to achieve this is to have user internal tests before launch so any errors on the technical side or in the navigation of the page can be repaired before launch. 
                        </dd>
                    <dt> <strong> Enjoyable to use, or Engaging</strong> </dt>
                        <dd> Users will consistently return to your site if they find it fun and engaging. If the site is being built for a specific community or group, then it should fit the unique needs of that group/community. A prime example of this is in the MMO community, the gamers tend to want as much information upfront as possible without having to do additional research. Some of this engagement could be icons, pictures, and animations that meet the design of the MMO that it references. 
                        </dd>
                    </dl>
                <p>
                    There are ten different page layout tags; <strong>header, nav, main, section, article, aside, figure, blockquote, footer, and div</strong>. 
                    The <strong>header tag</strong> helps denote the name, publisher, and marketing slogan of the web application or site. 
                    The <strong>nav tags</strong> take users from the current page they are on to another page within the site. The navigation tags normally include the main menu, search, tools, stories, and locations.
                    The <strong>main tag</strong> denotes the primary block for the app/site that will hold the "meat" of the website/application.
                    The <strong>section tag</strong> is used to set up a specific group of information or links that share a common theme. 
                    The <strong>article tag</strong> is considered a "subclass" of the section tag where they are normally within the section tags. 
                    The <strong>aside, figure, and blockquote tags</strong> are used to help structure the article tag sections. The aside tag gives the ability to float an item to the left or right of that article. The figure tag puts media files into the section while the blockquote tag is used when a quotation or citation is longer than a paragraph. 
                    The <strong>footer tag</strong> goes at the bottom of the main section and includes things like the legal information of the site, contact information to the website/application, and other links to potentially critical information. 
                    The <strong>div tag</strong> helps set up dynamic content. This has not yet been covered. 
                </p>
                <ol>
                    <li> Anchors that link the user to <strong>external content</strong> use the "a href" tag. This creates a URL link that is specified within the tag. Opening and closing of the tag should properly describe where the link will take the user when they click it. </li>
                    <li> The <strong>internal anchor element</strong> links from one text item to another text item within the same page. This is done by using IDs to an attribute with its value being defined with a hashtag. </li>
                    <li> When using anchors to <strong>link from page to page</strong> it is very similar to the internal anchor element. This is done by using the IDs of the page that is being linked. This can also be done using the nav tag. </li>
                </ol>
            </article>
            <article id = "Optimizing Images">
                <h3> Optimizing Images </h3>
                <p>
                    When working on optimizing an image there are 6 major specifications of images for the web. 
                    The <strong>descriptive file name</strong> is used to improve search engine optimization (SEO), file names should include who, what, when, and where as much as possible.
                    <strong>Small file sizes</strong> should be used as often as possible for the fastest load times. 
                    <strong>Exact dimensions</strong> can be configured by cropping and reducing the size of images to fit the dimensions of the space on your web page.
                    Using the correct <strong>file format</strong> is key for the type of picture being used. 
                    Line art images are usually a . GIF or e-bit PNG file formats. 
                    <strong>Reducing the resolution</strong> of an image can help the wider range of users load the image faster due to the wide range of resolutions in the computer monitor market.
                    <strong>The color mode</strong> is necessary for specific file formats like RGB for .PNG, .JPG, .SVG, and .WebP, and Indexed for .GIF.
                    The most common file formats for the web are .GIF, .PNG, and .SVG for <strong>line art</strong>, and .JPG.
                    These files are optimized at 150px wide in RGB color mode at 72ppi (pixels per inch). Notice which letters, shapes, and imagery are clear, blurry, or pixelated.
                </p>
            </article>
            <article id = "Favicon">
                <h3> Favicon </h3>
                <p>
                    <strong>Favicons</strong> are used on browsers and devices to modify the default icon image for a site/application. 
                    This includes the icon on a phone for the website if you have a shortcut on your main screen along with changing the small icon at the top left-hand corner of your browser window/tab.
                    The standard formats for favicons are ICO and PNG.
                </p>
            </article>
            <article id="stylesheets">
                <h3>Cascading stylesheets</h3>
                <p>
                Stylesheets are crucial for websites and apps for several reasons:
                    Stylesheets allow the <strong>separation of content</strong> from presentation. 
                    This makes the code more organized, easier to read, and maintainable. 
                    It also facilitates teamwork, as developers can specialize in either HTML or CSS.
                    Stylesheets ensure a <strong>consistent</strong> look and feel across an entire website or app. 
                    This is critical for maintaining <strong>brand identity</strong>, which includes using specific colors, fonts, and layouts.
                    CSS enables the creation of <strong>responsive layouts</strong> that adapt to different screen sizes and devices. 
                    This is essential for providing a good user experience on various devices, from desktop computers to smartphones.
                    Stylesheets make it <strong>easy to change the appearance</strong> of a website or app without modifying the underlying content. 
                    Stylesheets allow you to apply styles to multiple elements or pages, which in turn saves time and effort.
                    CSS provides the necessary tools to improve the <strong>accessibility</strong> of web content for all users, this includes users with disabilities. 
                    CSS files can contribute to <strong>faster page load times</strong>. 
                    CSS files give you the opportunity to make global changes to the webpage or app. 
                    This allows for <strong>easy maintenance</strong> within the site's total design. 
                </p>
                <p>
                    There are several ways to incorporate styles into a website or app. 
                    Each method serves different purposes and has its own advantages. 
                    Here are five common ways to incorporate styles:
                    <ol>
                        <li>
                            <strong>
                                External Stylesheets (Linking): 
                            </strong>
                            External linking involves creating a separate CSS file with all the style rules and linking it to the HTML document using the link element in the head section of the HTML file.
                            This method is widely used for its <strong>efficiency and maintainability</strong>. 
                            It's suitable for most web projects, especially those with multiple pages.
                        </li>
                        <li>
                            <strong>
                                Internal Styles (Style Tags): 
                            </strong>
                            Style rules are directly written in the style tags within the head section of the HTML file.
                            Internal styles are used when you want to apply specific styles to a <strong>single page</strong> without affecting the rest of the website.
                        </li>
                        <li>   
                            <strong>
                                Inline Styles: 
                            </strong>
                            Style rules are applied directly to individual HTML elements using the style attribute.
                            Inline styles are used when you need to apply styles to a <strong>specific element</strong> to override existing or global styles.
                        </li>
                        <li>    
                            <strong>
                                import in CSS:
                            </strong>
                            CSS import is used to include external stylesheets from another CSS file.
                            This method is used to modularize CSS code to <strong>conditionally</strong> load styles based on certain criteria.
                        </li>
                        <li>
                            <strong>
                                Using a CSS Preprocessor:
                            </strong>
                            CSS preprocessors like Sass or Less allow developers to write CSS with additional features.
                            These preprocessors are then compiled into standard CSS before being deployed.
                            CSS preprocessors are used to enhance the <strong>development workflow and maintainability</strong> of larger projects.
                        </li>
                    </ol>
                </p>
            </article>
            <article id="forms">
                <h3>Form usability, elements and attributes, best practices, and accessibility</h3>
                <p>
                Accessible forms play a crucial role in ensuring that websites and applications can be used by people with disabilities. Here are the six major goals of accessible forms and the reasons why they are important:
                    <ol>
                        <li>
                        <strong>Perceivable:</strong>
                        Goal: Ensure that all form elements and labels are perceivable by users, including those with visual or hearing impairments.
                        Importance: This allows users to identify and understand form elements, making it possible for them to provide input and interact with the form effectively.
                        </li>
                        <li>
                        <strong>Operable:</strong>
                        Goal: Make form elements easy to operate for all users, including those who may have motor disabilities.
                        Importance: This ensures that all users, regardless of their abilities, can navigate through and interact with the form using various input methods, such as keyboard, mouse, or assistive technology.
                        </li>
                        <li>
                        <strong>Understandable:</strong>
                        Goal: Create forms with clear and concise instructions and labels so that users can easily comprehend and complete them.
                        Importance: Clarity in form design reduces user confusion and errors, leading to a more efficient and frustration-free user experience.
                        </li>
                        <li>
                        <strong>Robust:</strong>
                        Goal: Build forms that are compatible with a wide range of user agents and assistive technologies, such as screen readers or voice recognition software.
                        Importance: Ensuring robustness promotes the longevity and accessibility of your forms, as technology evolves over time.
                        </li>
                        <li>
                        <strong>Consistent:</strong>
                        Goal: Maintain consistency in the structure and presentation of form elements throughout your website or application.
                        Importance: Consistency helps users develop a mental model of how forms work, making it easier for them to navigate and complete forms across your platform.
                        </li>
                        <li>
                        <strong>Error-tolerant:</strong>
                        Goal: Design forms that allow users to correct and recover from errors easily, with helpful error messages and feedback.
                        Importance: Error tolerance reduces user frustration and increases the likelihood of successful form submissions, benefiting all users.
                        </li>
                    </ol>
                </p>
                 <p>
                    Major HTML form-related tags, their attributes, and purposes include:
                    <ol>
                        <li>  
                            <strong>form:</strong>
                            Attributes: action, method, enctype, etc.
                            Purpose: Defines an HTML form for user input and encapsulates various form elements like text fields, radio buttons, checkboxes, and buttons.
                        </li>
                        <li>
                            <strong>input:</strong>
                            Attributes: type, name, id, placeholder, value, etc.
                            Purpose: Represents an input field, with various types for text, email, password, etc., and accepts user input.
                        </li>    
                        <li>
                            <strong>label:</strong>
                            Attributes: for, id.
                            Purpose: Associates a label with an input element, providing context and improving accessibility by helping screen readers identify the input's purpose.
                        </li>
                        <li>
                            <strong>textarea:</strong>
                            Attributes: name, id, cols, rows.
                            Purpose: Creates a multi-line text input field, suitable for longer text entries or comments.
                        </li>
                    </ol>
                 </p>
                 <p>
                    Form style recommendations to improve usability include:
                    <ol>
                        <li>
                            <strong>Visual Clarity:</strong>
                            Use clear and readable fonts.
                            Ensure proper contrast between text and background colors.
                            Maintain a logical and consistent layout.
                        </li>
                        <li>
                            <strong>Grouping and Structure:</strong>
                            Group related form elements together.
                            Use fieldset and legend elements to create form field groups.
                            Organize form fields in a logical order.
                        </li>
                        <li>
                            <strong>Validation Feedback:</strong>
                            Provide informative error messages when users make mistakes.
                            Highlight input fields with errors, such as changing the border color or displaying an error message nearby.
                        </li>
                        <li>
                            <strong>Field Size and Labeling:</strong>
                            Use appropriate input field sizes for the expected input length.
                            Label all form fields clearly, and associate labels with input elements using the "for" and "id" attributes.
                        </li>
                        <li>
                            <strong>Responsiveness:</strong>
                            Ensure forms are mobile-friendly and adapt to different screen sizes.
                            Consider touch-friendly controls for mobile users.
                        </li>
                        <li>
                            <strong>Keyboard Navigation:</strong>
                            Ensure all form elements are navigable and usable with a keyboard.
                            Maintain a logical tab order for keyboard navigation.
                        </li>
                        <li>
                            <strong>Autocomplete:</strong>
                            Use the autocomplete attribute to suggest values for commonly entered data, which can save users time and reduce errors.
                        </li>    
                            These recommendations improve usability by making forms more accessible, user-friendly, and efficient for all users, including those with disabilities or varying needs.
                    </ol>
                </p>
            </article>
            <article id="express">
                <h3>Node, npm, and Express</h3>
                <p>
                    <strong>Node.js, npm, and Express</strong> are three technologies commonly used in web development. They work together to enhance the development experience in various ways:
                    <ol>
                        <li>
                            <strong>Node.js:</strong>
                            <p>
                            Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server side. It uses the V8 JavaScript engine from Google Chrome, which enables high-performance execution of JavaScript code.
                            </p>
                            <ul>
                            <strong>How it improves web development:</strong>
                                <p>
                                <li>
                                    <strong>Unified Language:</strong> Node.js enables developers to use JavaScript on both the client and server side, which promotes code reuse and simplifies development workflows.
                                </li>
                                <li>
                                    <strong>Non-blocking I/O:</strong> Node.js is designed to handle many concurrent connections without getting blocked, making it efficient for handling tasks like serving files or handling network requests.
                                </li>
                                <li>
                                    <strong>Large Ecosystem:</strong> Node.js has a vast ecosystem of modules (via npm, the package manager) that can be easily integrated into projects, saving time and effort.
                                </li>
                                </p>
                            </ul>
                        </li>
                        <li>    
                            <strong>npm (Node Package Manager):</strong>
                            <p>
                            npm is the default package manager for Node.js. It allows developers to easily manage and install dependencies (libraries, frameworks, tools, etc.) for their projects.
                            </p>
                            <ul>
                                <strong>How it improves web development:</strong>
                                <p>
                                <li>
                                    <strong>Dependency Management:</strong> npm simplifies the process of managing external libraries and packages, making it easy to include third-party code in a project.
                                </li>
                                <li>
                                    <strong>Version Control:</strong> npm tracks versions of packages, ensuring that developers can specify precise versions of dependencies to maintain consistency across different environments.
                                </li>
                                <li>
                                    <strong>Scripts and Automation:</strong> npm allows developers to define custom scripts in their package.json file, making it easy to automate common development tasks.
                                </li>
                                </p>
                            </ul>
                        </li>
                        <li>
                            <strong>Express:</strong>
                            <p>
                            Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the process of creating web servers and handling routes.
                            </p>
                        </li>
                            <ul>
                                <strong>How it improves web development:</strong>
                                <p>
                                <li>
                                    <strong>Routing:</strong> Express makes it easy to define routes for handling different HTTP methods (GET, POST, etc.) and parameters, allowing for clean and organized code.
                                </li>
                                <li>
                                    <strong>Middleware:</strong> Express uses middleware to handle tasks like parsing incoming requests, authentication, and error handling. This modular approach simplifies application logic.
                                </li>
                                <li>
                                    <strong>Template Engines:</strong> Express supports various template engines (like EJS, Pug, etc.), which facilitate the generation of dynamic HTML content.
                                </li>
                                </p>
                            </ul>
                            <p>
                            <strong>How they work together:</strong>
                            </p>
                            <p>
                            Node.js provides the runtime environment for running JavaScript on the server.
                            npm allows you to manage and install third-party libraries and tools that you can use in your projects.
                            Express builds on top of Node.js, providing a framework for building web applications. It simplifies tasks like routing, middleware integration, and template rendering.
                            Together, these technologies enable developers to build efficient and scalable web applications using JavaScript on both the client and server side. They promote code reuse, simplify dependency management, and provide tools to streamline the development process.
                            </p>
                    </ol>
                </p>
            </article>
            <article id="javaScript">
                <h3>JavaScript</h3>
                <p>
                    In JavaScript, there are two general classifications of data types: <strong>primitive and non-primitive.</strong> Of the primitive data types, there are <strong>numbers, boolean values, strings, symbols, and two special values: null and undefined.</strong> There is only one non-primitive data type: the <strong>object</strong> type.
                </p>
                <p>
                    All JavaScript objects are sets of <strong>name-value</strong> pairs, called <strong>properties.</strong> We can perform various operations on objects, such as <strong>create, read, update, and delete (CRUD)</strong> properties. Objects in JavaScript are used similarly to objects in other programming languages. Likewise, JavaScript <strong>arrays</strong> are simply lists of objects whose property names are the strings '0', '1', '2', ... etc. Arrays share much of the same behavior as objects, with the addition of random-access and methods such as push() and pop(). A <strong>JavaScript Object Notation, or JSON,</strong> is a formatting style that represents data in the format of a JavaScript object. JSON's are programming language independent, and are widely used to transfer data between programs, even if the programs are written in different languages.
                </p>
                <p>
                    <strong>Conditionals and Loops</strong> are used for branching and looping through code statements, much like other programming languages. JavaScript supports <strong>automatic type conversion</strong>, which can lead to some unwanted behavior. Ideally, conditional statements should explicitly produce a boolean value and avoid automatic type conversion. This is best achieved with the use of the <strong>strict equality operators</strong> === and !==.
                </p>
                <p>
                    JavaScript supports <strong>Object-Oriented Programming, or OOP,</strong> which allows programmers to declare <strong>classes</strong> and create objects from those classes. Each class of objects share properties and behaviors, but each instance can have their own identity and state. JavaScript also supports <strong>Functional Programming</strong>, which allows functions to pass other functions as arguments, return other functions, and assign functions to variables. There are other concepts allowed as well, such as <strong>anonymous functions</strong>, which allow the programmer to generalize a <strong>high-order function</strong> and pass a specific function later. There is also the concept of <strong>closures</strong>, which <strong>capture</strong> the values of <strong>free variables</strong> at execution without passing the variable. In other words, closures have access outside the function's scope from within the function.
                </p>
            </article>
            <article id="DOMchanges">
                <h3>Changing the DOM</h3>
                {/* Why do developers update the DOM of a page using JavaScript and Express? */}
                <p>
                    The <strong>Document Object Model</strong>, or <strong>DOM</strong>, is a visual and interactive representation of a web page's structure. The DOM structure is often represented as a tree with many branches composed of nodes. These nodes on the tree correspond to HTML elements, text, and attributes. Using this model, web developers can manipulate web pages using a scripting language, such as JavaScript.
                </p>
                <p>
                    While manipulating the DOM tree is possible on any scripting language, JavaScript was written specifically to script web pages. As such, it has been the industry standard. <strong>Express</strong>, on the other hand, serves as the underlying library for many popular Node web frameworks. Also written in JavaScript, Express serves as the 'middleware' within the request handling pipeline, with many options for handling requests, generating responses, and setting web application settings.
                </p>
            </article>
        </section>
    )
}

export default TopicsPage;