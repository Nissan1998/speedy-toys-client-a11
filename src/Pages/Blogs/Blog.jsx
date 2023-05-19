import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useTitle from "../../CustomHook/useTitle";

const Blog = () => {
  useTitle("Blogs");
  return (
    <div>
      <div className="bg-gradient-to-r relative from-red-400 to-slate-400 to rounded-t-2xl">
        <Header></Header>
      </div>
      <div>
        <h3 className="text-4xl m-5 text-center font-bold text-yellow-600 underline">
          Q & A
        </h3>
        <div className="container h-[500px] mx-auto space-y-2">
          {/* accordion */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-center text-xl font-medium">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </div>
            <div className="collapse-content">
              <p>
                An access token and a refresh token are commonly used in
                authentication and authorization systems. Here's an explanation
                of each and how they work: <br /> 1. Access Token: An access
                token is a credential that is used to access protected resources
                on behalf of an authenticated user. It is typically issued by an
                <br /> 2. Access Token Usage: The client includes the access
                token in each request to the protected resources (API endpoints,
                services, etc.) by adding it to the authorization header or
                embedding it in the request parameters. 3. Expiration and
                Renewal: Access tokens have a relatively short expiration time,
                typically ranging from a few minutes to a few hours. Once the
                access token expires, the client must request a new one using
                the refresh token. 4. Refresh Token Usage: The client sends the
                refresh token to the authentication server, typically in a
                separate API call, to obtain a new access token. If the refresh
                token is valid and not expired, the server returns a fresh
                access token while reissuing a new refresh token. Regarding the
                storage of tokens on the client-side, it is crucial to follow
                security best practices: 1. Access Token: The access token is
                sensitive and should be securely stored to prevent unauthorized
                access. It should be stored in a way that is not easily
                accessible by client-side JavaScript code, such as in an
                HTTP-only cookie or browser's local storage. 2. Refresh Token:
                The refresh token is more long-lived and more sensitive than the
                access token. It should be stored securely and never exposed to
                client-side JavaScript code. Ideally, it should be stored in an
                HTTP-only cookie or secure browser storage with strict security
                controls. By securely storing the tokens, you can mitigate the
                risk of token theft or abuse by malicious actors. It's essential
                to implement appropriate security measures based on your
                application's specific requirements and the platform you're
                developing for.
              </p>
            </div>
          </div>
          {/* accordion */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-center text-xl font-medium">
              Compare SQL and NoSQL databases?
            </div>
            <div className="collapse-content">
              <p>
                Comparison: Data Model: SQL databases use a structured,
                table-based data model with predefined schemas, while NoSQL
                databases use flexible, schema-less data models. Scalability:
                NoSQL databases are designed to scale horizontally, allowing for
                easy distribution across multiple servers, while SQL databases
                typically scale vertically by adding more resources to a single
                server. Query Language: SQL databases use the SQL query
                language, which provides powerful querying capabilities for
                complex data relationships, while NoSQL databases use various
                query languages specific to their data model. Data Flexibility:
                SQL databases enforce strict data schemas, while NoSQL databases
                offer more flexibility and can handle diverse and evolving data
                structures. Use Cases: SQL databases are often used for
                applications with complex data relationships, transactions, and
                structured data. NoSQL databases are suitable for applications
                requiring high scalability, agility, and handling unstructured
                or semi-structured data.
              </p>
            </div>
          </div>
          {/* accordion */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-center text-xl font-medium">
              What is express js? What is Nest JS?
            </div>
            <div className="collapse-content">
              <p>
                Express.js is a popular minimalist web application framework for
                Node.js, providing a simple and flexible way to build web
                servers and APIs. <br /> Nest.js is a progressive, opinionated
                framework for building efficient and scalable server-side
                applications in Node.js. It leverages TypeScript and follows a
                modular, component-based architecture inspired by Angular,
                making it suitable for building complex and enterprise-grade
                applications.
              </p>
            </div>
          </div>
          {/* accordion */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-center text-xl font-medium">
              What is MongoDB aggregate and how does it work?
            </div>
            <div className="collapse-content">
              <p>
                MongoDB's aggregate is a framework for performing advanced data
                aggregation operations on collections of documents. It allows
                for complex data transformations and computations using a
                pipeline of stages. Each stage applies a specific operation,
                such as filtering, grouping, sorting, and aggregating, to
                process and manipulate the data. The results can be shaped and
                calculated based on various criteria, providing powerful
                analytical capabilities within MongoDB.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Blog;
