import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/LucasBarbosaFonseca.png" />
                    <div className={styles.userInfo}>
                        <strong>Lucas</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="04 de Agosto às 15:37h" dateTime="2022-08-04 15:37:04">Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>

            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe seu comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}