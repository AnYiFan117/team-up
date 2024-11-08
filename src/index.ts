import { Context, Schema } from 'koishi'

export const name = 'team-up'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  // write your plugin here

  ctx.middleware( (session, next) => {
    // do something
    if (session.content === "开黑"){
      return "开黑啦"
    } else{
      return next()
    }

  })
}
