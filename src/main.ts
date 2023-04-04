import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as bodyParser from 'body-parser'
import * as fs from 'fs'

async function bootstrap() {
  const privateKey = fs.readFileSync('./bagor-api.com/privkey.pem', 'utf8')
  const certificate = fs.readFileSync('./bagor-api.com/fullchain.pem', 'utf8')
  const httpsOptions = { key: privateKey, cert: certificate }

  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  })
  app.useGlobalPipes(new ValidationPipe())
  app.use(bodyParser.json({ limit: '1000000mb' })) // jsonをパースする際のlimitを設定
  app.use(bodyParser.urlencoded({ limit: '1000000mb', extended: true })) // urlencodeされたボディをパースする際のlimitを設定
  await app.listen(80)
}
bootstrap()
