const mongoose = require('mongoose')

const Data = mongoose.model('Data',{
    constraints: [{
        const: {
            type: String,
            trim: true
        }
    }],
    organizationName: {
        type: String,
        trim: true
    },
    projectName: {
        type: String,
        trim: true
    },
    projectScope: {
        type: String,
        trim: true
    },
    notProjectScope: {
        type: String,
        trim: true
    },
    definitions: [{
        definition: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        }
    }],
    references: [{
        reference: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        }
    }],
    perspective: {
        type: String,
        trim: true
    },
    requirements: [{
        req: {
            type: String,
            trim: true
        }
    }],
    processes: [{
        system:{
            type: String,
            trim: true
        },
        intro: {
            type: String,
            trim: true
        },
        purpose: {
            type: String,
            trim: true
        },
        input: {
            type: String,
            trim: true
        },
        process: {
            type: String,
            trim: true
        },
        output: {
            type: String,
            trim: true
        }
    }],
    users: [{
        user: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        }
    }],
    dictionary: [{
        name: {
            type: String,
            trim: true
        },
        aliase: {
            type: String,
            trim: true
        },
        used: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        info: {
            type: String,
            trim: true
        }
    }],
    assumptions: [{
        assumption: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        }
    }],
    performance: [{
        requirement: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        }
    }],
    designconstraint: [{
        constraint: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        }
    }],
    standards: [{
        standard: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        }
    }],
    reliability: {
        type: String,
        trim: true
    },
    security: {
        type: String,
        trim: true
    },
    maintainability: {
        type: String,
        trim: true
    },
    portability: {
        type: String,
        trim: true
    },
    dfdprocesses: [{
        input: {
            type: String,
            trim: true
        },
        process: {
            type: String,
            trim: true
        },
        output: {
            type: String,
            trim: true
        }
    }],
    stdtransitions: [{
        from: {
            type: String,
            trim: true
        },
        to: {
            type: String,
            trim: true
        },
        transition: {
            type: String,
            trim: true
        }
    }]
})

module.exports = Data