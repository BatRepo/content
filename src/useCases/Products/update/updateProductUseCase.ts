import { IMediaRepository } from "../../../repositories/interfaces/IMediaRepository";
import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { ProductDTO } from "./updateProductDTO";

export class ProductsUseCase {
    constructor(
        private productRepository: IProductRepository,
        private mediaRepository: IMediaRepository,
    ) {}
    async execute(
        data: ProductDTO
    ) {
            const product = await this.productRepository.findById(data.id);
            console.log('product', product);
            // if (user) {
            //     const mathPass = await PasswordEncryptor.comparePasswords(data.password, user.password);
            //     if (mathPass) {
            //         const userTokenAlreadExists = await this.usersTokenRepository.TokenExist(user._id);
            //         if (userTokenAlreadExists != undefined) {
            //             if (JWTservice.JWTVerifier(userTokenAlreadExists.token)) {
            //                 userTokenAlreadExists.token = JWTservice.sign({ uid: userTokenAlreadExists.userId });
            //                 await this.usersTokenRepository.updateToken(user._id, userTokenAlreadExists.token);
            //                 return userTokenAlreadExists;
            //             }
            //             return userTokenAlreadExists;
            //         }
            //         const token = JWTservice.sign({ uid: user._id });
            //         await this.usersTokenRepository.create(new UserToken({ userId: user._id , token }));
            //         return new UserToken({ userId: user._id, token });
            //     }
            //     throw 'Password not match';
            // }
    }
}