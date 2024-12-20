import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
interface UserRequest {
	name: string;
	email: string;
	password: string;
	authType: "EMAIL";
}

class CreateUserService {
	async execute({ email, name, password, authType }: UserRequest) {
		if (!email || !password) {
			throw new Error("Email e senhas obrigatorios");
		}

		const userAlreadyExists = await prismaClient.user.findFirst({
			where: {
				email: email,
			},
		});

		const passwordHash = await hash(password, 8);

		if (userAlreadyExists) {
			throw new Error("Usuario Já existe");
		}

		const user = await prismaClient.user.create({
			data: {
				name: name,
				email: email,
				password: passwordHash,
				authType: authType,
			},
			select: {
				id: true,
				name: true,
				email: true,
			},
		});

		return user;
	}
}

export { CreateUserService };
