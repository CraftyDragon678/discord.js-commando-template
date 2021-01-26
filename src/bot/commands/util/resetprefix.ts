import { Command, CommandoClient, CommandoMessage } from 'discord.js-commando';
import Settings from '@src/models/settingsModel';

export default class ResetPrefixCommand extends Command {
  constructor(client: CommandoClient) {
    super(client, {
      name: 'resetprefix',
      aliases: ['접두사초기화'],
      description: 'resetprefix command',
      group: 'util',
      memberName: 'resetprefix',
      patterns: [/^!resetprefix$/, /^!접두사초기화$/],
    });
  }

  async run(msg: CommandoMessage) {
    if (!msg.guild) return msg.channel.send('서버에서만 사용할 수 있는 명령어입니다.');
    if (!msg.member?.permissions.has('ADMINISTRATOR')) {
      return msg.channel.send('서버관리자만 접두사를 변경할 수 있습니다.');
    }
    const { guild } = msg;
    guild.commandPrefix = this.client.commandPrefix;
    await Settings.updateOne({ _id: msg.guild.id }, { $unset: { prefix: '' } }, { upsert: true });
    return msg.channel.send('접두사를 초기화 했습니다. ``!도움``과 같이 사용하실 수 있습니다.');
  }
}
