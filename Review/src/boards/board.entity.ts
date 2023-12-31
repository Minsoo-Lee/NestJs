import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {BoardStatus} from "./board-status.enum";
import {User} from "../auth/user.entity";
import {JoinColumn} from "typeorm/browser";

@Entity()
export class Board extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: BoardStatus;

    @ManyToOne(type => User, user => user.board, {eager: false})
    user: User;
}