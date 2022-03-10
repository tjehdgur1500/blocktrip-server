import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';



@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        // return req.user; => localAuthGuard Test return value
        return this.authService.login(req.user as User);
    }
}