using System.Collections.Generic;
using VarTender.Models;

namespace VarTender.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);

        UserProfile GetByFirebaseUserId(string firebaseUserId);

        List<UserProfile> GetAllUsers();
    }
}