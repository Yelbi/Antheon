<?php
        
            include_once("conexion_articulos.php");
            
            $sql = 'SELECT * FROM articulo';

            $sentencia = $pdo->prepare($sql);
            $sentencia->execute();

            $resultado = $sentencia->fetchAll();

            //var_dump($resultado);

            $articulos_x_pagina = 8;
            $total_articulos_db = $sentencia->rowCount();
            //echo $total_articulos_db;
            $paginas = $total_articulos_db/8;
            $paginas = ceil($paginas);
            //echo $paginas;

        ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Edu+SA+Beginner:wght@700&display=swap" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="../Antheon/img/Logo mini.png" />
    <link rel="stylesheet" href="../Antheon/Styles/Index_style.css">
    <link rel="stylesheet" href="../Antheon/Styles/Peligrosa_style.css">
    <title>Antheon</title>
</head>
<body>
    <nav class="menu">
    <div class="alpha">
        <ul>
            <li>
                <a href="../Antheon/index.php">Inicio</a>
            </li>
            <li>
                <a href="../Antheon/Galeria.php">Galeria</a>
            </li>
        </ul>
    </div>
            <div class="logo">
                <a href="../Antheon/Index.php">
                    <img src="../Antheon/img/Logo.png" alt="">
                </a>
            </div>
        <div class="omega">
        <ul>
            <li>
                <a href="../Antheon/Flor del Dia.php">Flor del Dia</a>
            </li>
            <li>
                <a href="../Antheon/Flores Peligrosas.php">Flores Peligrosas</a>
            </li>
        </ul>
    </div>
    </nav>

    <?php
        if(!$_GET){
            header('Location:../Antheon/Flores Peligrosas.php?pagina=1');
        }

        $iniciar = ($_GET['pagina']-1)*$articulos_x_pagina;
        //echo $iniciar;

        $sql_articulos = 'SELECT * FROM articulo LIMIT :iniciar,:narticulos';
        $sentencia_articulos = $pdo->prepare($sql_articulos);
        $sentencia_articulos->bindParam(':iniciar', $iniciar, PDO::PARAM_INT);
        $sentencia_articulos->bindParam(':narticulos', $articulos_x_pagina, PDO::PARAM_INT);
        $sentencia_articulos->execute();

        $resultado_articulos = $sentencia_articulos->fetchAll();
    ?>

    <main class="backmain">
        <br>
        <h1>Galeria</h1>
        <br>
        <div class="wrapper">
            <?php
                foreach ($resultado_articulos as $articulos):
            ?>
            <div class="card"><a href="<?php echo $articulos['link'] ?>">
                <div class="poster"><img src="<?php echo $articulos['poster'] ?>"></div>
                <div class="details">
                    <h2><?php echo $articulos['nombre'] ?></h2>
                    <p class="desc">
                        <?php echo $articulos['description'] ?>
                    </p>
                    <div class="cast">
                        <h3>Relacionadas</h3>
                        <ul>
                            <li><img src="<?php echo $articulos['relaciones1'] ?>"></li>
                            <li><img src="<?php echo $articulos['relaciones2'] ?>"></li>
                            <li><img src="<?php echo $articulos['relaciones3'] ?>"></li>
                        </ul>
                    </div>
                </div>
            </a>
            </div>
            <?php
                endforeach;
            ?>
        </div>
        <br>
        <nav class="pagination-container">
            <ul class="pagination">
                <li class="page-item <?php echo $_GET['pagina']<=1 ? 'disabled' : '' ?>">
                    <a class="page-link" href="../Antheon/Flores Peligrosas.php?pagina=<?php echo $_GET['pagina']-1 ?>">Anterior</a>
                </li>
                <?php for($i=0;$i<$paginas;$i++): ?>
                <li class="page-item <?php echo $_GET['pagina']==$i+1 ? 'active' : '' ?>">
                    <a class="page-link" href="../Antheon/Flores Peligrosas.php?pagina=<?php echo $i+1 ?>"><?php echo $i+1 ?></a>
                </li>
                <?php endfor ?>
                <li class="page-item <?php echo $_GET['pagina']>=$paginas ? 'disabled' : '' ?>">
                    <a class="page-link" href="../Antheon/Flores Peligrosas.php?pagina=<?php echo $_GET['pagina']+1 ?>">Siguiente</a>
                </li>
            </ul>
        </nav>
        
        <br>
    </main>
    <footer class="backfooter">
        <h2>By Yelbi</h2>
    </footer>
</body>
</html>