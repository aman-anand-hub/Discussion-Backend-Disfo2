const discussionModel = require("../Modal/discussion.modal");

class discussionService {
    create = async (discussionDoc) => {
        const newDiscussioDoc = new discussionModel(discussionDoc);
        const data = await newDiscussioDoc.save();
        return data;
    }

    findAll = async () => {
        const discussionData = await discussionModel.find({});
        return discussionData;
    }

    findbyUsername = async (userName) => {
        const discussionDocs = await discussionModel.find({ username: userName });
        return discussionDocs;
    }

    findbyId = async (ID) => {
        const discussionDocs = await discussionModel.find({ id: ID });
        return discussionDocs;
    }

    deleteById = async (ID) => {
        const discussionDocs = await discussionModel.deleteOne({id: ID});
        return discussionDocs;
    }

    patchById = async (ID, update) => {
        const patchedDoc = await discussionModel.findOneAndUpdate(
            { id: ID },
            update,
            { new: true }
        );
        return patchedDoc;
    }

    putById = async (ID, doc) => {
        const replacedDoc = await discussionModel.findOneAndReplace(
            { id: ID },
            doc,
            { new: true }
        );
        return replacedDoc;
    }
}

module.exports = discussionService;