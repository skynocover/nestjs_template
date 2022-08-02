import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

// middleware
import { LogMiddleware } from 'src/middlewares/log.middleware';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [PrismaModule],
})
export class ArticlesModule {
  configure(consumer: MiddlewareConsumer) {
    // 指定route
    consumer.apply(LogMiddleware).forRoutes('articles');
    // 另一種指定
    consumer.apply(LogMiddleware).forRoutes(
      { path: '/:id', method: RequestMethod.POST }, // POST /:id 會生效
    );
    // 排除route
    consumer
      .apply(LogMiddleware)
      .exclude(
        { path: '/:id', method: RequestMethod.PATCH }, // 排除 GET /:id
      )
      .forRoutes(ArticlesController);

    // 作用於整個Controller
    // consumer.apply(LoggerMiddleware).forRoutes(UtilsController);
  }
}
