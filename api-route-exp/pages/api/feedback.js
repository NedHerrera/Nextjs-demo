import fs from 'fs';
import path from 'path';

export function buildFeedbackPath() {
    return path.join(process.cwd(), 'data', 'feedback.json');
  }
  
  export function extractFeedback(filePath) {
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    return data;
  }

function handler(req, res)
{
    if(req.method === 'POST')
    {
        const email = req.body.email
        const feedbackText = req.body.text
        const newFeedback = {
            id : new Date().toISOString(),
            email: email,
            text: feedbackText
        };
        // the feedback can be store in a DB

        // store in a json code
        const filePath = buildFeedbackPath();
        const data = extractFeedback(filePath);
        data.push(newFeedback);
        fs.writeFileSync(filePath, JSON.stringify(data));

        res.status(201).json({
            msj: newFeedback
        })
    }
    else
    {
        res.status(200).json({
            msj: 'this works'
        })
    }
}

export default handler;