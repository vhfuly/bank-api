import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BankAccount } from 'src/models/bank-account';
import { Repository } from 'typeorm';

@Controller('banck-accounts')
export class BanckAccountController {
    constructor(
        @InjectRepository(BankAccount)
        private bankAccountRepo: Repository<BankAccount>
    ) {}

    @Get()
    index() {
        return this.bankAccountRepo.find()
    }

    @Get(':bankAccountId')
    show(
        @Param('bankAccountId', new ParseUUIDPipe({ version: '4' })) bankAccountId: string,
    ) {
        console.log(bankAccountId)
        return this.bankAccountRepo.findOneOrFail(bankAccountId)
    }
}
