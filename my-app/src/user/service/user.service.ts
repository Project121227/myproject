import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import { UserEntity } from '../models/user.entity';
import { Repository}  from 'typeorm';
import { Observable , from} from 'rxjs';
import { User } from '../models/user.interface';
@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
    ){}

    create(user : User): Observable<User>{
        return from( this.userRepository.save(user));
    }

    findall(): Observable<User[]>{
        return from ( this.userRepository.find());
    }

    getHello(): string {
        return 'Helloworld';
      }
}
