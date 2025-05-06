#Window Object
The Window Object represent the global window in a browser. Both the Browser Object Model (BOM) and the Document Object Model (DOM) are the part of the window Object.

#Browser Object Model (BOM)
- The Browser Object Model represent the browser as an object and provides methods and properties for interacting with the browser itself (not directly related to the content of a web Page).

- Examples of BOM feature include window.navigator for browser information, window.location for URL manipulation, and window.alert for displaying alerts.

#Document Object Model (DOM)
- The DOM represents the structure document as a tree of Objects, where each object corresponds to a part of the document (Such as elements, attributes, and text)

- The DOM is primarily concerned with the content of the web page and allows JavaScript to interact with and manipulate the HTML elements.

- So while the DOM is focused on the content of the page, and the BOMis focused on the browser environment. The Window Object serves as the global object that encompresses both the DOM and the BOM when working in a browser environment.