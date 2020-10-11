const todoValidator = {};
const { body, param, validationResult } = require('express-validator');

todoValidator.idParamCheck = [
    param('id').isString().withMessage('the task must be of type string').isLength({ max: 24 }).withMessage('must be at max 24 chars long'),
    (req, res, next) => {
        // Validated ID
        if (!validationResult(req).isEmpty()) return res.status(422).json({ errors: validationResult(req).array() });
        
        // Continue process
        next();
    }
];

todoValidator.createCheck = [ // Validate
    body('task').isString().withMessage('the task must be of type string').isLength({ min: 3 }).withMessage('must be at least 3 chars long'),
    (req, res, next) => { // Http Middleware
        // Validated Task
        if (!validationResult(req).isEmpty()) return res.status(422).json({ errors: validationResult(req).array() });
        
        // Continue process
        next();
    }
];

todoValidator.updateCheck = [ // Validate
    body('id').isString().withMessage('the id must be of type string').isLength({ max: 24 }).withMessage('must be at max 24 chars long'),
    body('task').isString().withMessage('the task must be of type string').isLength({ min: 3 }).withMessage('must be at least 3 chars long'),
    (req, res, next) => { // Http Middleware
        // Validated Task
        if (!validationResult(req).isEmpty()) return res.status(422).json({ errors: validationResult(req).array() });
        
        // Continue process
        next();
    }
];

todoValidator.completeCheck = [ // Validate
    body('id').isString().withMessage('the id must be of type string').isLength({ max: 24 }).withMessage('must be at max 24 chars long'),
    body('isCompleted').isBoolean().withMessage('the task must be of type boolean'),
    (req, res, next) => { // Http Middleware
        // Validated Task
        if (!validationResult(req).isEmpty()) return res.status(422).json({ errors: validationResult(req).array() });
        
        // Continue process
        next();
    }
];

module.exports = todoValidator;