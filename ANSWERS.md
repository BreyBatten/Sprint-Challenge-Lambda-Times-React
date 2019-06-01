What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are a way for us to check our data that is being passed to our components. It is important to check our data because you can catch a lot of bugs
with typechecking. As your app and code base grow, so too do the number of possible bugs. By using PropTypes, you are able to check your data and receive
warnings in the console if something isn't right.

Describe a life-cycle event in React?

The life-cycle of a component is made up of 3 stages. The birth/mounting phase, the growth/updating phase, and the death/un-mounting phase. The mounting phase
is when the component is being built. It is where your render method is invoked, and where `componentDidMount` gets called.
The updating phase is where you `setState` to change the state of the component's data, and where shouldComponentUpdate can be used to stop a component from calling
render.
The un-mounting phase is where the component is removed from the screen. `componentWillUnmount` is invoked here.

Explain the details of a Higher Order Component?

A HOC takes a component and optional arguments as input and returns an enhanced component. They are used as patterns for designing components that share some kind
of behavior or data in a way that connects them differently that `state -> props` pattern.

What are three different ways to style components in React? Explain some of the benefits of each.

Traditional CSS styling in a seperate file and then imported in, inline styling, and styled components. Traditional CSS is beneficial in that it keeps the code
base of the React App smaller and we already know how to style in that way. Inline styling can be beneficial by not needing to import any files and you can see the 
styling right inside the App. Styled Component are beneficial in that they use a styling library that comes with pre-styled features. You can build reusable components
that get passed the styling.