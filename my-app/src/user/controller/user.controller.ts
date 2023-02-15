import { Body, Controller, Get, Post, } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { User } from '../models/user.interface';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {

    constructor(private userService: UserService){}

    @Post()
    create(@Body()user: User): Observable<User>{
        return from (this.userService.create(user));

    }
    @Get()
    findall(): Observable<User[]>
    {

        return from(this.userService.findall());

     }
}
