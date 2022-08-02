import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

// defined response type
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ArticleEntity } from './entities/article.entity';

// 使用Guard
import { AuthGuard } from '../guards/auth.guard';

@Controller('articles')
@ApiTags('articles') // group endpoints in swagger
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @ApiCreatedResponse({ type: ArticleEntity })
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  @ApiOkResponse({ type: ArticleEntity, isArray: true }) //defined response in swagger
  findAll() {
    return this.articlesService.findAll();
  }

  @Get('drafts')
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findDrafts() {
    return this.articlesService.findDrafts();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @ApiOkResponse({ type: ArticleEntity })
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ArticleEntity })
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(id, updateArticleDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ArticleEntity })
  // remove(@Param('id', ParseIntPipe) id: number) { // parse to number in pipe
  remove(@Param('id') id: string) {
    return this.articlesService.remove(id);
  }
}
