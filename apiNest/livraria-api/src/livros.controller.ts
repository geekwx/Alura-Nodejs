import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from './livro.model';
import { LivrosService } from "./livros.services";


@Controller('livros')
export class LivrosController {

    constructor(private livrosService: LivrosService){

    }

    @Get()
    obterTodos(): Livro[] {
        return this.livrosService.obterTodos();
    }

    @Get(':id')
    obterUm(@Param() params): Livro{
        return this.livrosService.obterUm(params.id);
    }

    @Post()
    criar(@Body() livro : Livro )  {
        this.livrosService.criar(livro);
    }

    @Put()
    alterar(@Body() livro: Livro): Livro {
        console.log(livro)
        return this.livrosService.alterar(livro);
    }

    @Delete()
    apagar(@Param() params){
        this.livrosService.apagar(params.id);
    }
}
    
