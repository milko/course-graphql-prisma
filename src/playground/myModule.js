// Named export - Has a name, has as many as needed.
// Default export - Has no name and you can onlòy have one.

const message = "Hello GraphQL!";
const name = "Andrew";
const location = "Philadelphia";
const getGreeting = (name) => {
    return `Welcome to the course, ${name}.`;
};

export { message, name, getGreeting, location as default };
