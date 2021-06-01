const config = {
    verbose: true,
    transform: {
        "\\.[jt]sx?$": "babel-jest"
    },
    moduleNameMapper: {
        "\\.(scss|less)$": "<rootDir>/src/mocks/styleMock.js"
    }
};

module.exports = config;
