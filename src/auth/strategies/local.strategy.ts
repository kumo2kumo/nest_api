import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { User } from '../../@generated/prisma-nestjs-graphql/user/user.model'
import { AuthService } from '../../auth/auth.service'
import { ModuleRef } from '@nestjs/core'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService, private moduleRef: ModuleRef) {
    super({
      usernameField: 'email',
      passReqToCallback: true,
    })
  }

  async validate(request: Request): Promise<User> {
    const reqBody = request.body
    const user = this.authService.validateUser(reqBody)

    if (!user) {
      throw new UnauthorizedException()
    }

    return user
  }
}
