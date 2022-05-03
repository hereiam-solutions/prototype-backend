const getMany = (req, res) => {
    res.send({ message: 'Hello and Welcome!' });
};

// combine all controllers onto a single object
const exampleController = {
    getMany: getMany,
};

export default exampleController;
