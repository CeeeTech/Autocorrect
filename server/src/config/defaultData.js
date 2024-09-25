const WritingType = require('../models/writingTypeModel');

// create default resources which are users, resources, actions, user_groups, policies, user_groups_policies with resourceName, code, description
async function createDefaultResources() {
    const defaultWritingTypes = [
        { writing_type_name: 'Persuasive Essay Writing', code: 'persuasive_essay_writing' },
        { writing_type_name: 'Text Response Essays', code: 'text_response_essays' },
        { writing_type_name: 'Narrative Writing', code: 'narrative_writing' },
        { writing_type_name: 'Language Analysis', code: 'language_analysis' },
    ];

    for (const writing_type of defaultWritingTypes) {
        const existingWritingTypes = await WritingType.findOne({ code: writing_type.code });
        if (!existingWritingTypes) {
            await WritingType.create(writing_type);
            console.log(`WritingType ${writing_type.code} created`);
        } else {
            console.log(`WritingType ${writing_type.code} already exists`);
        }
    }
}

async function initializeDefaultData() {
    try {
        await createDefaultResources();
    } catch (error) {
        console.error("Error during initialization:", error);
    }
}

module.exports = {
    initializeDefaultData
};