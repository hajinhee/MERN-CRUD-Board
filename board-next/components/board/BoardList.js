import * as React from 'react';
import styles from '@/styles/Board.module.css'
import style from '@/styles/Table.module.css'

export function BoardList({columns, data, colspan}) {

    return (
        <section id="contact">
            <div className={styles.board_container}>
                <div className={styles.board_form_container}>
                    <div className={styles.right}>
                        <form className={styles.form_container}>
                            <h1 >게시글 목록</h1>
                            <table className={style.blueone}>
                                <thead>
                                    <tr>
                                        {
                                            columns.map((column) => (
                                                <th key={column}>
                                                    <h3>{column}</h3>
                                                </th>
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.length == 0
                                            ? <tr>
                                                    <td colSpan={colspan}>데이터가 없습니다.</td>
                                                </tr>
                                            : data.map((boards) => (
                                                <tr key={boards.name}>
                                                    <td >{boards.title}</td>
                                                    <td >{boards.name}</td>
                                                    <td >{boards.email}</td>
                                                    <td >{boards.content}</td>
                                                </tr>
                                            ))
                                    }
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );

}