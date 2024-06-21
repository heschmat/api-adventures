import { Router, Request, Response } from 'express';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  if (!filename || isNaN(width) || isNaN(height)) {
    return res.status(400).send('Missing or invalid parameters!');
  }

  const inputPath = path.join(
    __dirname,
    '..',
    '..',
    '..',
    'full',
    `${filename}.jpg`,
  );
  const outputPath = path.join(
    __dirname,
    '..',
    '..',
    '..',
    'thumb',
    `${filename}-${width}x${height}.jpg`,
  );

  if (!fs.existsSync(inputPath)) {
    return res.status(404).send('Image not found');
  }

  try {
    await sharp(inputPath).resize(width, height).toFile(outputPath);

    return res.status(200).sendFile(outputPath);
  } catch (err) {
    res.status(500).send('Error processing image.');
  }
});

export default router;
