<?php
require "db_connection.php";

function getCats()
{
    global $con;
    $getCatQuery = "select * from catagery";
    $result = mysqli_query($con,$getCatQuery);
    while ($row = mysqli_fetch_assoc($result)){

        $title = $row['cat_title'];
        $id = $row ['cat_id'];
        echo " <li> <a class='nav-link'  href='#'>$title</a></li>";
    }
}

function getbrand()
{
    global $con;
    $getCatQuery = "select * from brand";
    $result = mysqli_query($con,$getCatQuery);
    while ($row = mysqli_fetch_assoc($result)){

        $title = $row['brand_title'];
        $id = $row ['brand_id'];
        echo " <li> <a class='nav-link'  href='#'>$title</a></li>";
    }
}