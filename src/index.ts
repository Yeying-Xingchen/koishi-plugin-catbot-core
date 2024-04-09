import { Context, Schema } from 'koishi'

export const name = 'catbot-core'

export interface Config {
  BotName: string,
  MessageType
}

export const Config: Schema<Config> = Schema.object({
  BotName: Schema.string().description('机器人名称').default('CatBot'),
  MessageType: Schema.union(['Text', 'Image（暂时无法使用）']).description('消息类型')
})

export function apply(ctx: Context, cfg: Config) {
  ctx.command("catbot").action(async ({ session }) => {
    if (cfg.MessageType == 'Text')
      var help = cfg.BotName+" 帮助\n" +
        "catbot 显示帮助信息"
      return help;
    });
}
