const discussionService = require("../Service/discussion.service");
const discussionServiceInstance = new discussionService();

const postReq = async (req, res) => {
    try {
        const discussionDocument = await discussionServiceInstance.create(req.body);
        res.status(200).json(discussionDocument);
    }
    catch(error) {
        res.status(500).json(error);
    }
}

const getAll = async (req, res) => {
    try {
        const allDiscussionDocs = await discussionServiceInstance.findAll();
        res.status(200).json(allDiscussionDocs);
    }
    catch(error) {
        res.status(500).json(error);
    }
}

const getByUsername = async (req, res) => {
    try {
        const { username } = req.params;
        const docsByUsername = await discussionServiceInstance.findbyUsername(username);
        res.status(200).json(docsByUsername);
    }
    catch(error) {
        res.status(500).json(error);
    }
}

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const docsByID = await discussionServiceInstance.findbyId(id);
        res.status(200).json(docsByID);
    }
    catch(error) {
        res.status(500).json(error);
    }
}

const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRecord = await discussionServiceInstance.deleteById(id);
        res.status(200).json({ message: "Document successfully deleted.", deletedRecord })
    }
    catch(error) {
        res.status(500).json(error);
    }
}

const patchById = async (req, res) => {
    try {
        const { id } = req.params;
        const update = req.body;
        const patchedDoc = await discussionServiceInstance.patchById(id, update);
        res.status(200).json(patchedDoc);
    }
    catch(error) {
        res.status(500).json(error);
    }
}

const putById = async (req, res) => {
    try {
        const { id } = req.params;
        const doc = req.body;
        const updatedDoc = await discussionServiceInstance.putById(id, doc);
        res.status(200).json(updatedDoc);
    }
    catch(error) {
        res.status(500).json(error);
    }
}

module.exports = {
    postReq, getAll, getByUsername, getById, deleteById, patchById, putById
}