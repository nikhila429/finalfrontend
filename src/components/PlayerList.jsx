import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoggedComponent from './LoggedComponent';
import TrnmtDash from './TrnmtDash';

const PlayerList = (props) => {
  const TId = props.location.state.TId;
  const OId = props.location.state.OId;

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/playernames/${TId}`)
      .then(response => {
        // Fetch rating for each player
        Promise.all(response.data.map(player => {
          return axios.get(`http://localhost:8080/ratings/player-average-rating/${player.id}`)
            .then(ratingResponse => {
                
              player.rating = ratingResponse.data;
              return player;
            })
        }))
        .then(playersWithRatings => {
          setPlayers(playersWithRatings);
        })
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (PId) =>{
    axios.delete(`http://localhost:8080/api/admins/delete-rqst/${PId}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  
  const handleDeleteRating = (OId, PId) =>{
    axios.delete(`http://localhost:8080/ratings/${OId}/${PId}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
      window.location.reload();
  }


  const handleRatingChange = (event, playerId) => {
    const newPlayers = players.map(player => {
      if (player.id === playerId) {
        player.providedRating = event.target.value;
      }
      return player;
    });
    setPlayers(newPlayers);
  };

  const handleSubmitRating = (playerId, userId, rating) => {
    
    const requestData = {
      playerId: playerId,
      rating: rating,
      userId: userId
    };
    const req1 ={
      newRating: rating
    }
    
      axios.post(`http://localhost:8080/ratings/${userId}/${playerId}`, req1).then(response => {
        const updatedPlayer = response.data;
        const newPlayers = players.map(player => {
          if (player.id === updatedPlayer.id) {
            player.rating = updatedPlayer.rating;
            player.providedRating = '';
          }
          return player;
        });
        window.location.reload();
    }).catch(error => {axios.post(`http://localhost:8080/ratings/addrating`, requestData)
    .then(response => {
      const updatedPlayer = response.data;
      const newPlayers = players.map(player => {
        if (player.id === updatedPlayer.id) {
          player.rating = updatedPlayer.rating;
          player.providedRating = '';
        }
        return player;
      });
      setPlayers(newPlayers);
      window.location.reload();
    })
    .catch(error => {
      console.log(error);
    });
  })
  };
  return (
    <div className="tasklist-container">
      <LoggedComponent />
      <TrnmtDash TId={TId} OId={OId}/>
      <br />
      <div className="t2asklist-content">
        <h2 className="tasklist-heading" style={{color: 'black'}}>Player Details</h2>
        <table className="tasklist-table">
          <thead>
            <tr>
              <th>Player Id</th>
              <th>Display Name</th>
              <th>Tournament Id</th>
              <th>User Id</th>
              <th>Rating</th> {/* New column for ratings */}
              <th>Update Rating</th> {/* New column for user-provided ratings */}
              <th>Sub/Del Rating</th>
              <th>Delete Player</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.displayName}</td>
                <td>{player.tournamentId}</td>
                <td>{player.userId}</td>
                <td>{player.rating || '-'}</td> {/* Display rating or dash if not available */}
                <td>
  {/* Render input field for user-provided ratings */}
  <input
    type="number"
    min="0"
    max="10"
    value={player.providedRating || ''}
    onChange={(event) => handleRatingChange(event, player.id)}
  />
</td>
<td>
  {/* Render button to submit user-provided rating */}
  <button
    className="update-button"
    onClick={() => handleSubmitRating(player.id, OId, player.providedRating)}
  >
    Submit Rating
  </button>
  {/* Render button to delete player */}
  <button
    className="delete-button"
    onClick={() => handleDeleteRating(OId, player.id)}
  >
    Delete
  </button>
</td>
                <td>
                  <button
                    onClick={() => handleDelete(player.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <Link
          to={{
            pathname: "/trnmtdash",
            state: {
              OId: OId,
              TId: TId
            }
          }}
        >
          Back to Tournament Dashboard
        </Link>
      </div>
    </div>
  );
};

export default PlayerList;
