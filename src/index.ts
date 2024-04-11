import { Context, Schema } from 'koishi'

export const name = 'catbot-core'

export interface Config {
  BotName: string,
  CommandName: string,
  MessageType
}

export const Config: Schema<Config> = Schema.object({
  BotName: Schema.string().description('机器人名称').default('CatBot'),
  CommandName: Schema.string().description('命令名称').default('catbot'),
  MessageType: Schema.union(['Text', 'Image（暂时无法使用）']).description('消息类型')
})

export function apply(ctx: Context, cfg: Config) {
  ctx.command(cfg.CommandName).action(async ({ session }) => {
    if (cfg.MessageType == 'Text')
      var help = cfg.BotName+" 帮助\n" +
        cfg.CommandName+" 显示帮助信息"
      session.send(help);
    });
  ctx.on('guild-member-added', async (session) => {
    if (cfg.MessageType == 'Text')
      session.send("你好，我是"+cfg.BotName+"！欢迎你，ID为" + session.userId+ "的新群友！");
  });
}

