import React from 'react';
import styles from '@/styles/Board.module.css'

export function AddBoard({onChange, onSubmit, onClick}) {

    return (
        <section id="contact">
            <div className={styles.board_container}>
                <div className={styles.board_form_container}>
                    <div className={styles.right}>
                        <form className={styles.form_container} onSubmit={onSubmit}>
                            <h1 >게시글 작성</h1>
                            <input className={styles.input}
                                type="text"
                                placeholder="Title *"
                                name="title"
                                required="required"
                                onChange={onChange}
                                />
                            <input className={styles.input}
                                type="text"
                                placeholder="Name *"
                                name="name"
                                required="required"
                                onChange={onChange}
                                />
                            <input className={styles.input}
                                type="text"
                                placeholder="Email *"
                                name="email"
                                required="required"
                                onChange={onChange}
                                />
                            <input className={styles.input2}
                                type="text"
                                placeholder="Content *"
                                name="content"
                                required="required"
                                onChange={onChange}
                                />
                            <div>
                                <button className={styles.green_btn} onClick={onClick}>
                                    취소
                                </button>
                                <button type="submit" className={styles.green_btn}>
                                    등록하기
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}