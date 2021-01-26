import { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import client from '@src/bot';

const router = Router();

router.get('/status', expressAsyncHandler(async (req, res) => (
  res.json({
    guildSize: client.guilds.cache.size,
    channelSize: client.channels.cache.size,
    memberSize: client.guilds.cache.reduce((prev, curr) => prev + curr.memberCount, 0),
    userSize: client.users.cache.size,
    uptime: client.uptime,
    readyAt: client.readyAt,
  })
)));

export default router;
