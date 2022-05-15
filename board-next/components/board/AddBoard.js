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
                            <input
                                type="text"
                                placeholder="Title *"
                                name="title"
                                onChange={onChange}
                                required="required"
                                className={styles.input}/>
                            <input
                                type="text"
                                placeholder="Name *"
                                name="name"
                                onChange={onChange}
                                required="required"
                                className={styles.input}/>
                            <input
                                type="text"
                                placeholder="Email *"
                                name="email"
                                onChange={onChange}
                                required="required"
                                className={styles.input}/>
                            <input
                                type="text"
                                placeholder="Subject *"
                                name="subject"
                                onChange={onChange}
                                required="required"
                                className={styles.input2}/>
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